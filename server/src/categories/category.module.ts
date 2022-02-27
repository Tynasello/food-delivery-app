import { Module } from '@nestjs/common'
import { CategoryService } from './category.service'
import { CategoryResolver } from './category.resolver'
import { PrismaService } from 'src/prisma.service'

@Module({
    providers: [CategoryResolver, CategoryService, PrismaService],
    exports: [CategoryService],
})
export class CategoryModule {}