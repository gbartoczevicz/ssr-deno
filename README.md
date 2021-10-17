# SSR with Deno

A simple Deno std/http server that renders React and Styled Components into a raw HTML

## Requirements

- Deno 1.14.3
- GNU Make 4.3 (Optional)

## Running

- Execute the server with `make` by running `make run` or by Deno itself `deno run --import-map import_map.json --allow-net --allow-read main.ts`
- Acess the server at http://localhost:3000
