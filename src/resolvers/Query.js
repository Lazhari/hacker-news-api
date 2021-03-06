const { getUserId } = require("../utils");
async function feed(root, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter }
        ]
      }
    : {};

  if (args.mine) {
    const userId = getUserId(context);
    where.postedBy = {
      id: userId
    };
  }
  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });
  const count = await context.prisma
    .linksConnection({
      where
    })
    .aggregate()
    .count();

  return { links, count };
}
function link(parent, { id }, context, info) {
  return context.prisma.link(id);
}

module.exports = {
  feed,
  link
};
