import { NextApiRequest, NextApiResponse } from 'next';
import sendEmail from '../../util/sendEmail';

export default async (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'POST') {
        const { name, email, phone } = request.body;
        await sendEmail({ name, email, phone });
        return response.status(200).end();
    }

    return response.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}
