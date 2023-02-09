import prisma from '../prisma/prisma'

export default () => {
  return prisma.note.findMany()
}
