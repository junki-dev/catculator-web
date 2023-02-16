import { IGetFeedAmountReq, IGetFeedAmountResp } from './interface';

import axios from 'axios';

export const getFeedAmount = async (req: IGetFeedAmountReq): Promise<IGetFeedAmountResp> => {
  return axios
    .get(`${process.env.REACT_APP_API_SERVER_ENDPOINT}/calc`, { params: req })
    .then(({ data }) => data.data.info);
};
