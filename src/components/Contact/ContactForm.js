import { ButtonPrimary } from "../common/Button";
import { Input, InputTextArea } from "../common/Input";
import { ContactFormContainer } from "./style"

const ContactForm = () => {
    return (
        <ContactFormContainer>
            <div className="input__wrapper row-one">
                <Input 
                    type="text"
                    label="NAME"
                    error={false}
                />
                <Input 
                    type="text"
                    label="email"
                    error={false}
                />
            </div>
            <div className="input__wrapper row-two">
                <InputTextArea label="message"/>
                <ButtonPrimary>Send</ButtonPrimary>
            </div>
        </ContactFormContainer>
    )
}

export default ContactForm;