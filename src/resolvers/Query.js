const os = require("os");

const info = () => os.hostname();
const osInfo = () => {
  const userInfo = os.userInfo();
  const cpus = os.cpus().length || 0;
  const arch = os.arch();
  const freemem = os.freemem();
  const totalmem = os.totalmem();
  const usedMemoryPercent = ((totalmem - freemem) / totalmem) * 100;
  return {
    ...userInfo,
    cpus,
    arch,
    freemem,
    totalmem,
    usedMemoryPercent
  };
};
const feed = (root, args, context, info) => {
  return context.prisma.links();
};
const link = (parent, { id }, context, info) => {
  return context.prisma.link(id);
};

module.exports = {
  info,
  osInfo,
  feed,
  link
};
