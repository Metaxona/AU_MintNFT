// "ipfs-http-client": "^60.0.0"

// const { urlSource } = require('ipfs-http-client');

async function run() {
    const { create, globSource } = await import('ipfs-http-client');
    // const ipfs = create({ host: '127.0.0.1', port: 5001 });
    const ipfs = create(new URL('http://127.0.0.1:5001'));
    // we added three attributes, add as many as you want!
    const metadata = {
            path: '/metadata.json', // the file name that the uploaded metadata will take
            content: JSON.stringify({
            name: "CAT NFT",
            attributes: [
                {
                    "trait_type": "Background",
                    "value": "Space" 
                },
                {
                    "trait_type": "Breed",
                    "value": "Geometric"
                },
                {
                    "trait_type": "Eyes",
                    "value": "None"
                }
            ],
            image: "https://ipfs.io/ipfs/QmbYXhg3ndesXEBZF5ByeAW1fxEtui35KHQpMsp5WBhRQU",
            description: "Cats Everywhere"
        })
    };

    const result = await ipfs.add(metadata);
    console.log('https://ipfs.io/ipfs/' + result.cid)
    // await ipfs.files.cp(`/ipfs/${result.cid}`, metadata.path)

    // To Add Images Programmatically to IPFS 
    // uploading programatically using this methos will take time for the file to be seen in the file manager

    // this will be used to convert the image to a buffer so we could upload it to the ipfs
    // const fs = require('fs')

    // const fileName = 'housecat.png'
    // read file sync gets the path from the root dir that's why this starts with ./ipfs instead of ./images
    // this buffer can be used to add image to the ipfs using ipfs.add
    // const imagebuffer = fs.readFileSync(`./ipfs/images/${fileName}`)

    // this will output {path, cid, size}
    // this will add the image to the ipfs but will not yet show it
    // const result = await ipfs.add(imagebuffer)

    // this will add the image to the ipfs so you could view it with the file explorer too
    // await ipfs.files.cp(`/ipfs/${result.cid}`, `/${fileName}` /* <- pathName which is the file name of the image in the ipfs*/)

    // uploading the same image will return an error if the pathName is the same since you can't update/overwrite a file using IPFS, you'll need IPNS for that
      
}

run()