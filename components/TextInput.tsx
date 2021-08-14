import { DeepMap, FieldError, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
    name: string;
    placeholder: string;
    label: string;
    type: string;
    errors: DeepMap<FieldValues, FieldError>;
    register: UseFormRegister<FieldValues>;
};

export default function TextInput({ name, label, type, placeholder, errors, register }: Props) {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                {type === "textarea" ? (
                    <textarea
                        className={errors[name] ? "textarea is-danger" : "textarea"}
                        {...register(name)}
                        placeholder={placeholder}></textarea>
                ) : (
                    <input
                        className={errors[name] ? "input is-danger" : "input"}
                        type={type}
                        {...register(name)}
                        placeholder={placeholder}
                    />
                )}
            </div>
            {errors[name] && <p className="help is-danger">{errors[name]?.message}</p>}
        </div>
    );
}
