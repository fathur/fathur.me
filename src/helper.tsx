import fs from 'fs';
import path from 'path';

export const BLOGS_PATH = path.join(process.cwd(), 'src/blogs');

export const blogFilePaths = fs
  .readdirSync(BLOGS_PATH)
  .filter((path) => /\.mdx?$/.test(path));
