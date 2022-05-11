import { extendType, objectType, stringArg } from "nexus";

export const Message = objectType({
  name: "Message",
  definition(t) {
    t.id("id");

    t.string("email");

    t.string("message");
    t.string("firstName");
    t.string("lastName");
    t.string("subject");
  },
});

export const allMessages = extendType({
  type: "Query",
  definition(t) {
    t.list.field("allMessages", {
      type: "Message",
      resolve: async (_, _args, ctx) => {
        return await ctx.prisma.message.findMany();
      },
    });
  },
});

export const newMessage = extendType({
  type: "Mutation",
  definition(t) {
    t.field("newMessage", {
      type: "Message",
      args: {
        subject: stringArg(),
        message: stringArg(),

        firstName: stringArg(),
        lastName: stringArg(),
        email: stringArg(),
      },
      async resolve(_, args, ctx) {
       
        const {
          subject,
          message,

          firstName,
          lastName,
          email,
        } = args;

        return await ctx.prisma.message.create({
          data: {
            subject,
            message,

            firstName,
            lastName,
            email,
          },
        });
      },
    });
  },
});
