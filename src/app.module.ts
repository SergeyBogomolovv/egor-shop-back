import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserGuard } from './auth/guards/user.guard';
import { AdminGuard } from './auth/guards/admin.guard';
import { TicketsModule } from './tickets/tickets.module';
import { Ticket } from './tickets/entities/ticket.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
      global: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGERS_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [User, Ticket],
        synchronize: true,
      }),
    }),
    AuthModule,
    UsersModule,
    TicketsModule,
  ],
  providers: [UserGuard, AdminGuard],
})
export class AppModule {}
