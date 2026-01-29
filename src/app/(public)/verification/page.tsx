"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";




export default function VerificationPage() {



    return (
        <div className="w-full flex justify-center items-center h-dvh">
            <Card className="max-w-200 w-full mx-4">
                <CardHeader>
                    <CardTitle className="text-3xl text-center font-bold">Verifique seu email</CardTitle>
                    <CardDescription className="text-center text-lg">Enviamos um link de verificação para o seu email</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                    <Field className="w-fit">
                        <InputOTP id="digits-only" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
                            <InputOTPGroup>
                                <InputOTPSlot className="p-6" index={0} />
                                <InputOTPSlot className="p-6" index={1} />
                                <InputOTPSlot className="p-6" index={2} />
                                <InputOTPSlot className="p-6" index={3} />
                                <InputOTPSlot className="p-6" index={4} />
                                <InputOTPSlot className="p-6" index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </Field>
                </CardContent>
            </Card>
        </div>
    )
}