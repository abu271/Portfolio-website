export type ProjectType = {
    img: string,
    text:string,
    src: string,
    demo: string
}

export type PopupType = {
    showPopup?: boolean,
    text?: string,
    closePopup? : React.MouseEventHandler<HTMLButtonElement>
}
