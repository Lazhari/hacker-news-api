function feed(root, args, context, info) {
  return context.prisma.links();
}
function link(parent, { id }, context, info) {
  return context.prisma.link(id);
}

module.exports = {
  feed,
  link
};
