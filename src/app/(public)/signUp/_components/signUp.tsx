import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
    import { LibraryBig } from "lucide-react";
    import Image from "next/image";

    export default function SignUp() {




        return (
            <Card className="min-w-250">
                <CardContent>
                    <div className="grid grid-cols-2 gap-4 min-h-180">
                        <div className="flex h-full rounded-md overflow-hidden">
                            <div className="flex flex-col justify-between w-full h-full p-6 overflow-hidden relative">
                                <Image fill className="object-cover object-bottom backdrop-blur-sm" alt="Sign Up Image" src="/signUp/signup_Image.jpg" />
                                {/* TEXTO DE CIMA */}
                                <div className="absolute inset-0 bg-black/20 backdrop-blur-xs "></div>
                                <div className="flex justify-between items-center z-2">
                                    <LibraryBig />
                                    <h2 className="font-bold text-2xl uppercase text-center">Sign Up</h2>
                                </div>
                                {/* TEXTO DE BAIXO */}
                                <p className="font-bold text-xl max-w-150 text-center mx-auto z-2">Comece hoje a acompanhar o desempenho dos seus alunos de forma simples e clara.</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center space-y-2">
                            <div className="mb-4">
                                <h2 className="text-4xl uppercase font-bold">Crie uma conta</h2>
                                <p className="text-muted-foreground text-lg">Preencha as informações abaixo para criar sua conta.</p>
                            </div>
                            <FieldSet>
                                <FieldGroup className="grid grid-cols-2 gap-2">
                                    <Field>
                                        <FieldLabel>Primeiro nome</FieldLabel>
                                        <Input type="text" placeholder="Digite seu primeiro nome" />
                                        <FieldDescription>Insira seu nome próprio.</FieldDescription>
                                        <FieldError>Nome inválido.</FieldError>
                                    </Field>
                                    <Field>
                                        <FieldLabel>Sobrenome</FieldLabel>
                                        <Input type="text" placeholder="Digite seu sobrenome" />
                                        <FieldDescription>Insira seu sobrenome.</FieldDescription>
                                        <FieldError>Sobrenome inválido.</FieldError>
                                    </Field>
                                    <Field className="col-span-2">
                                        <FieldLabel>Email</FieldLabel>
                                        <Input type="email" placeholder="Digite seu email" />
                                        <FieldDescription>Insira um email válido.</FieldDescription>
                                        <FieldError>Email inválido.</FieldError>
                                    </Field>
                                    <Field className="col-span-2">
                                        <FieldLabel>Instituição de ensino</FieldLabel>
                                        <Input type="text" placeholder="Digite o nome da sua instituição de ensino" />
                                        <FieldDescription>Insira o nome completo da sua instituição de ensino.</FieldDescription>
                                        <FieldError>Preencha os dados corretamente, instituição invalida.</FieldError>
                                    </Field>
                                    <Field>
                                        <FieldLabel>Password</FieldLabel>
                                        <Input type="password" placeholder="Digite sua senha" />
                                        <FieldDescription>Insira uma senha segura.</FieldDescription>
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
                            <div className="flex items-center space-x-2">
                                <Switch id="terms" />
                                <label htmlFor="terms" className="text-sm">Eu li e aceito os termos e condições.</label>
                            </div>
                            <Button className="cursor-pointer mt-2" variant="default">Criar conta</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        )
    }