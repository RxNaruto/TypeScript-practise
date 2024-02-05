import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.post.create({
    data: {
        title: "This is my first post",
        content: "The post is about creating post on prisma",
        author:{
            connect: {
                id: 1
            }
        }
    }
  })
}

main()
