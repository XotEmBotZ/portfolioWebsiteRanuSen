import * as fs from 'fs'

export default async function handler(req, res) {
    let projects=[];
    let fileNames = await fs.promises.readdir('./projects')
    for (const iterator of fileNames) {
        var data=await JSON.parse(await fs.promises.readFile('./projects/'+iterator))
        projects.push({
            shortTitle:data.shortTitle,
            description:data.description,
            slug:data.slug
        })
    }
    res.status(200).json(JSON.stringify(projects));
}