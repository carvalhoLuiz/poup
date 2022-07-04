import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
    @Field(() => ID)
    userId: number;
    @Field()
    name: string;
    @Field()
    email: string;
    @Field()
    password: string;
    @Field()
    cpf: string;
}
