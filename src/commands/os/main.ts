export function runOs(_args: string[]) {
  console.log();
  // _systemMemoryInfo();
  // _memoryUsage();
  random();
}

function random() {
  // console.log({ "Window release version": Deno.osRelease() });
  console.log({ "This PC's name": Deno.hostname() });
  console.log({ osUptime: Deno.osUptime() });
  console.log(Deno.build);
  console.log(Deno.uid());
  console.log(Deno.gid());
  console.log({
    "The current process ID of this instance of the Deno CLI": Deno.pid,
    "The process ID of parent process of this instance of the Deno CLI":
      Deno.ppid,
  });
  console.log(Deno.version);
  console.log(Deno.resources());
  console.log(Deno.env.get("OS"));
  console.log(Deno.env.get("PATH"));
  console.log(Deno.env.get("HOME"));
  // console.log(Deno.mainModule);
  // console.log(Deno.loadavg()); // always [0,0,0] on windows
  // console.log(Deno.networkInterfaces());
}

function _memoryUsage() {
  const l = Deno.memoryUsage();
  // console.log(l);
  const memoryUsage = {
    "The number of bytes of the current Deno's process resident set size":
      l.rss,
    "The total size of the heap for V8, in bytes": l.heapTotal,
    "The amount of the heap used for V8, in bytes": l.heapUsed,
    "Memory, in bytes, associated with JavaScript objects outside of the JavaScript isolate":
      l.external,
  };
  console.log(memoryUsage);
}

function _systemMemoryInfo() {
  const l = Deno.systemMemoryInfo();
  const systemMemoryInfo = {
    "Total installed memory in bytes": l.total,
    "Total installed memory": formatBytes(l.total),
    "Unused memory in bytes": l.free,
    "Unused memory formatBytes": formatBytes(l.free),
    "Unused memory byteToKiB": byteToKiB(l.free),
    "Unused memory byteToMiB": byteToMiB(l.free),
    "Unused memory byteToKB": byteToKB(l.free),
    "Unused memory byteToMB": byteToMB(l.free),
    "Estimation of how much memory, in bytes, is available": l.available,
    "Memory used by kernel buffers": l.buffers,
    "Memory used by the page cache and slabs": l.cached,
    // "Memory used by the page cache and slabs": formatBytes(l.cached),
    "Total swap memory": l.swapTotal,
    "Unused swap memory": l.swapFree,
  };
  console.log(systemMemoryInfo);
}

function byteToKiB(bytes: number): number {
  return bytes / 1024;
}

function byteToMiB(bytes: number): number {
  return bytes / 1000000;
}

function byteToKB(bytes: number): number {
  return bytes / 1000;
}

function byteToMB(bytes: number): number {
  return byteToKB(bytes) / 1000;
}

function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = [
    "Bytes",
    "KiB",
    "MiB",
    "GiB",
    "TiB",
    "PiB",
    "EiB",
    "ZiB",
    "YiB",
  ];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
