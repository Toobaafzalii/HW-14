
export default function validateInput(value: string, Validaton:Ivalidation): string {
    const timeRegex = /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
    if(Validaton.required && !value)
        return "This field is required"
    if(Validaton.regex && !timeRegex.test(value))
return "This field must has HH:MM:SS format"
    else return ""
  }