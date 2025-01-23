import { defineConfig } from 'sanity'
import {structureTool} from 'sanity/structure'
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "9m1tz24q",
    dataset: "production",
    title: "Painted by Sarah - Sanity",
    apiVersion: "2025-01-12",
    basePath: "/admin",
    plugins: [
        structureTool(),
    ],
    schema: { types: schemas }
}) 

export default config;