import me from '../queries/me';
import news from '../queries/news';
import getallperson from "../queries/getallperson"
import getpersonbyid from "../queries/getpersonbyid"
const Query = new ObjectType({
    name: 'Query',
    fields: {
      me,
      news,
      getpersonbyid,
      getallperson,
    },
  });


export default Query;