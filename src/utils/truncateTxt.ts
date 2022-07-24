const truncateTxt = ({ txt, max }: { txt: string; max: number }): string => txt.substring(0, max);
export default truncateTxt;
