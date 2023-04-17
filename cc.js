const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const INDEX = (folder) => `
import ${folder} from './${folder}';
export default ${folder};
`;

const COMPONENT = (folder) => `
import Styled${folder} from './Styled${folder}';

const ${folder} = () => {
  return (
    <Styled${folder}>
      ${folder}
    </Styled${folder}>
  );
};

export default ${folder};
`;

const STYLED = (folder, isPage = false) => `
import styled from 'styled-components';
${isPage ? "import { IonPage } from '@ionic/react';" : ''}

const Styled${folder} = styled${isPage ? "(IonPage).attrs({className: 'ion-padding'})" : '.div'}\`\`;

export default Styled${folder};
`;

const writeFile = ({ file, data }) => {
  fs.writeFile(file, data, (err) => {
    if (err) throw err;
    console.log(`${file} has been created`);
  });
};

const createComponent = (component, path, isPage) => {
  fs.mkdir(path, (error) => {
    if (!error) {
      writeFile({
        file: `${path}/index.js`,
        data: INDEX(component)
      });

      writeFile({
        file: `${path}/${component}.js`,
        data: COMPONENT(component)
      });

      writeFile({
        file: `${path}/Styled${component}.js`,
        data: STYLED(component, isPage)
      });
    } else console.log({ error });
  });
};

const cli = () => {
  rl.question('What is the component name? ', (component) => {
    rl.question('What is the component type? (type 1 for layout, 2 for UI, or 3 for pages) ', (type) => {
      rl.close();

      if (!['1', '2', '3'].includes(type)) {
        console.log('Invalid type');
        return;
      }

      const typeName = type === '1' ? 'layout' : type === '2' ? 'UI' : '../pages';
      const path = `./src/components/${typeName}/${component}`;
      fs.access(path, fs.constants.F_OK, (ok) => {
        const isPage = type === '3';
        if (ok) createComponent(component, path, isPage);
        else console.log(`${component} exists`);
      });
    });
  });
};

cli();
