import { Button } from "@/components/ui/button";
import { Card, CardContent, } from "@/components/ui/card";
import { Field, FieldGroup, FieldSet, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function SignInComponent() {


    return (
        <Card className="max-w-200 w-full mx-4">
            <CardContent>
                <div className="flex flex-col justify-center space-y-2">
                    <div className="mb-4">
                        <h2 className="text-4xl text-center uppercase font-bold">Bem vindo de volta!</h2>
                        <p className="text-muted-foreground text-center  text-lg">Preencha as informações abaixo para efetuar o login.</p>
                    </div>
                    <FieldSet>
                        <FieldGroup className="grid grid-cols-2 gap-2">
                            <Field className="col-span-2">
                                <FieldLabel>Email</FieldLabel>
                                <Input type="email" placeholder="Digite seu email" />
                                <FieldDescription>Insira um email válido.</FieldDescription>
                                <FieldError>Email inválido.</FieldError>
                            </Field>
                            <Field>
                                <FieldLabel>Password</FieldLabel>
                                <Input type="password" placeholder="Digite sua senha" />
                                <FieldDescription>Insira sua senha.</FieldDescription>
                                <FieldError>Senha inválida.</FieldError>
                            </Field>
                            <Field>
                                <FieldLabel>Confirmar Password</FieldLabel>
                                <Input type="password" placeholder="Confirme a senha" />
                                <FieldDescription>Confirme a sua senha.</FieldDescription>
                                <FieldError>Senha inválida.</FieldError>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <Button className="cursor-pointer mt-2" variant="default">Entrar</Button>
                </div>
            </CardContent>
        </Card>
    )
}