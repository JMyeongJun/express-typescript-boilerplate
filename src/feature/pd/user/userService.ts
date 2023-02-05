
export const getList = async (body: object) => {
	try {
		console.log(body);
		return body;
	} catch (e) {
		console.log(e);
		return; 
	}
};