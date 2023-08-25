export class Post {
    private _title: string;
    private _text: string;
    private _image: string;

    constructor(title: string, text: string, image: string) {
        this._title = title;
        this._text = text;
        this._image = image;
    }

    title() {
        return this.title;
    }

    text() {
        return this.text;
    }

    image() {
        return this.image;
    }
}
