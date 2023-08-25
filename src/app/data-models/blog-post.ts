export class BlogPost {
    _id: any | undefined
    title: string
    html: string

    constructor(
        _id: any | undefined = undefined, 
        title: string,
        html: string,
    ) {
        this._id = _id
        this.title = title
        this.html = html
    }
}