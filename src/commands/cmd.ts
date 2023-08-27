// /**
//  * subprocess_simple.ts
//  */

// // define command used to create the subprocess
// const command = new Deno.Command(Deno.execPath(), {
//   args: [
//     "eval",
//     "console.log('hello'); console.error('world')",
//   ],
// });

// // create subprocess and collect output
// const { code, stdout, stderr, signal, success } = await command.output();

// console.assert(code === 0);
// console.assert("world\n" === new TextDecoder().decode(stderr));
// console.log(new TextDecoder().decode(stdout));

// const p = await Deno.run({ cmd: ["powershell", "ls"] });
// console.log(p);

// console.log(await p.status());
// console.log(await p.output());

// const command = new Deno.Command(Deno.execPath(), { args: ["echo", "abcd"] });
// const command = new Deno.Command("powershell", { args: ["echo", "abcd"] });
// const { pid,  } = command.spawn();
// console.log(pid);
// console.log(Deno.execPath());
// console.log(Deno);
// console.log(Deno.cwd());
// console.log(new Deno.Command().spawn);
// console.log(Deno.Consol);
