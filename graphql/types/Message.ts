import { extendType, objectType, stringArg, queryType, nonNull } from "nexus";

export const Message = objectType({
  name: "Message",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("email");
    t.nonNull.string("message");
    t.nonNull.string("firstName");
    t.nonNull.string("lastName");
    t.nonNull.string("subject");
  },
});

export const allMessages = queryType({
  definition(t) {
    t.list.field("messages", {
      type: "Message",
      resolve(_, __, ctx) {
        return ctx.prisma.message.findMany();
      },
    });
  },
});

export const newMessage = extendType({
  type: "Mutation",

  definition(t) {
    t.field("message", {
      type: "Message",
      args: {
        subject: nonNull("String"),
        message: nonNull("String"),
        firstName: nonNull("String"),
        lastName: nonNull("String"),
        email: nonNull("String"),
      },
      resolve(_, args, ctx) {
        return ctx.prisma.message.create({
          data: {
            ...args,
          },
        });
      },
    });
  },
});
