import * as fs from 'fs'

export default async function handler(req, res) {
    let projects=[];
    let fileNames = await fs.promises.readdir('./projects')
    for (const iterator of fileNames) {
        projects.push(JSON.parse(await fs.promises.readFile('./projects/'+iterator)))
    }
    res.status(200).json(JSON.stringify(projects));
}