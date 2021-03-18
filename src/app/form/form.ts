interface formData {
    first: string,
    last: string
}

export class Form {
    constructor(public name: formData){}
}