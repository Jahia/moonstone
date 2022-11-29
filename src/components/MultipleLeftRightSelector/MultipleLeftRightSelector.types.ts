export type Option = {
    label: string,
    value: string

}
export type MultipleLeftRightSelectorProps = {
    options?: Option[],
    arrayValue?: string[],
    readOnly?: boolean,
    onChange: (v: string[]) => void
}
