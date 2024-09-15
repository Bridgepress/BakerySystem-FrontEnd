export class Product{
    constructor(
        public id: string,
        public title: string,
        public count: number,
        public price: number,
        public description: string,
        public image: string,
        public type: string
    ){}
}