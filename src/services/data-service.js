import publications from '../data/publications'

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
            values: this.#dataset.map(d=>forceString?`&nbsp;${d[c]}`:d[c]),
          }))
        
    }
}