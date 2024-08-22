const formatPrice = (amount: number | string) => {
	return new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
	}).format(Number(amount));
};

export default formatPrice;
