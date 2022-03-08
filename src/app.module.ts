import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path/posix'
import { UserModule } from './user/user.module'

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb://marcosht:mongo123@localhost:27017/?authSource=admin&readPreference=primary&ssl=false'
        ),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
