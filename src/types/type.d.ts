
interface Iinput {
    props : Iprops
}

 
interface Iprops {
    label : string
    name : string
    type : string
    placeHolder : string
    value: string
    validation: Ivalidation
    onValueChange :  (e) => void
 }

 interface IalarmModalProps {
  alarm?: IalarmInfo
 }

 interface IcontainerProps {
   alarms?: IalarmInfo[]
 }

 interface IcardProps {
   alarm: IalarmInfo
 }
 

 interface IalarmInfo {
    id: number
    title:string
    time: string
    description: string
 }

 interface Ivalidation {
    required : boolean
    regex ?: boolean
 }