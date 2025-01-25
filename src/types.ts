import { Data } from "https://deno.land/x/lucid@0.10.10/src/plutus/data.ts";

const JpgOffersV2DatumShape = Data.Object({
    owner: Data.Bytes(),
    payouts: Data.Array(
        Data.Object({
            address: Data.Object({
                paymentCredential: Data.Object({ 
                    pubKeyHash: Data.Bytes() 
                }),
                stakeCredential: Data.Object({
                    container: Data.Object({ 
                        container: Data.Object({
                            stakeKeyHash: Data.Bytes()
                        })
                    }) 
                }),
            }),
            value: Data.Map(Data.Bytes(), Data.Object({
                index: Data.Integer(),
                map: Data.Map(Data.Bytes(), Data.Integer())
            }))
        }))
});
export type JpgOffersV2Datum = Data.Static<typeof JpgOffersV2DatumShape>;
export const JpgOffersV2Datum = JpgOffersV2DatumShape as unknown as JpgOffersV2Datum;


const JpgAskV1DatumShape = Data.Object({
    payouts: Data.Array(
        Data.Object({
            address: Data.Object({
                paymentCredential: Data.Object({ 
                    pubKeyHash: Data.Bytes() 
                }),
                stakeCredential: Data.Object({
                    container: Data.Object({ 
                        container: Data.Object({
                            stakeKeyHash: Data.Bytes()
                        })
                    }) 
                }),
            }),
            lovelace: Data.Integer(),
        })),
    owner: Data.Bytes()
});

export type JpgAskV1Datum = Data.Static<typeof JpgAskV1DatumShape>;
export const JpgAskV1Datum = JpgAskV1DatumShape as unknown as JpgAskV1Datum;