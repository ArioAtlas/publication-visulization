import publications from '../data/publications'
import _ from 'lodash'

const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

export class DataService {
    static #instance = null
    #dataset = publications
    #filters = []
    

    static getInstance(){
        if(this.#instance === null){
            this.#instance = new DataService()
        }
        return this.#instance
    }

    getColumn(columnName,forceString=false){
        return this.#dataset.map(d=>forceString?`&nbsp;${d[columnName]}`:d[columnName])
    }

    getDimensions(columns,forceString=false){
        return columns.map(c=>({
            label: c.substr(0,1).toUpperCase() + c.substr(1),
            values: this.#dataset.map(d=>forceString?`&nbsp;${
                d[c].toString().replace(/Faculty of /, '').replace(/Dept. of /, '')
                .match(/(\S+\s\S+){1,2}/g)?.join('<br />') ??d[c]}`:d[c]),
          }))
    }

    getGroupedBy(columns,forceString=false){
        columns.push('pubs')
        let data = this.#dataset.map(d=>_.pick(d,...columns))
        const ids = []
        const parents = []
        const values = []
        
        data = groupBy(columns[0])(data)
        ids.push(...Object.keys(data))
        parents.push(...Object.keys(data).map(v=>''))
        values.push(...Object.values(data).map(v=>v.reduce((a,c)=>a+c.pubs,0)))

        for(const key in data){
            data[key] = groupBy(columns[1])(data[key])
            ids.push(...Object.keys(data[key]).map(v=>`${key} - ${v}`))
            parents.push(...Object.keys(data[key]).map(v=>`${key}`))
            values.push(...Object.values(data[key]).map(v=>v.reduce((a,c)=>a+c.pubs,0)))
        }

        for(const key in data)
            for(const subKey in data[key]){
                data[key][subKey] = groupBy(columns[2])(data[key][subKey])
                ids.push(...Object.keys(data[key][subKey]).map(v=>`${key} - ${subKey} - ${v}`))
                parents.push(...Object.keys(data[key][subKey]).map(v=>`${key} - ${subKey}`))
                values.push(...Object.values(data[key][subKey]).map(v=>v.reduce((a,c)=>a+c.pubs,0)))
            }

        for(const key in data)
            for(const subKey in data[key])
                for(const fineKey in data[key][subKey]){
                    data[key][subKey][fineKey] = groupBy(columns[3])(data[key][subKey][fineKey])
                    ids.push(...Object.keys(data[key][subKey][fineKey]).map(v=>`${key} - ${subKey} - ${fineKey} - ${v}`))
                    parents.push(...Object.keys(data[key][subKey][fineKey]).map(v=>`${key} - ${subKey} - ${fineKey}`))
                    values.push(...Object.values(data[key][subKey][fineKey]).map(v=>v.reduce((a,c)=>a+c.pubs,0)))
                }

        return {
              ids,
              labels:ids.map(i=>(i.lastIndexOf(' - ') > 0 ? i.substr(i.lastIndexOf(' - ')+3):i)) ,
              parents: parents,
              values
        }
    }
}
