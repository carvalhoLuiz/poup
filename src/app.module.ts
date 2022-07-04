import { UserModule } from './app/user/user.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
    imports: [
        UserModule,
        DatabaseModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            playground: true,
        }),
    ],
})
export class AppModule {}
