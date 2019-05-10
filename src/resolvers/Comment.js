function createdBy(parent, args, context) {
  return context.prisma.comment({ id: parent.id }).createdBy();
}

function link(parent, args, context) {
  return context.prisma.comment({ id: parent.id }).link();
}

module.exports = {
  createdBy,
  link
};
