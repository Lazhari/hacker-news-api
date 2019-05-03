async function feed(root, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter }
        ]
      }
    : {};
  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });
  return links;
}
function link(parent, { id }, context, info) {
  return context.prisma.link(id);
}

module.exports = {
  feed,
  link
};
