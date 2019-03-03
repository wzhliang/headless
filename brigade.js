const { events, Job } = require("brigadier");
events.on("wisecloud/test", () => {
  var job = new Job("do-nothing", "alpine:3.8");
  job.tasks = [
    "echo Hello headless!"
  ];

  job.run();
});

events.on("push", () => {
  var job = new Job("do-nothing", "alpine:3.8");
  job.tasks = [
    "handling git push",
    "echo Hello",
    "echo World"
  ];

  job.run();
});

events.on("exec", () => {
  var job = new Job("do-nothing", "alpine:3.8");
  job.tasks = [
    "echo handling exec",
    "echo Hello",
    "echo World"
  ];

  job.run();
});
