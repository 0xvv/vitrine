export const optionsCog = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
export const optionsChain = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
export const optionsWheel = [194, 203, 222, 239, 248, 251, 279, 288, 298, 305, 317, 330, 337, 340, 349, 355, 357, 369, 381, 387, 390, 400, 406, 419, 428, 432, 438, 440, 451, 457, 484, 489, 490, 498, 501, 507, 520, 531, 534, 540, 541, 547, 559, 565, 571, 584, 590, 597, 609, 622, 630, 635, 642];
export const optionsTire = [16,18,20,23,25,28,32,35,37,40,44,47,50,54,57,62];
export const cadences = [20,30,40,50,60,70,80,90,100,110];

export const defaultCogMin = 13;
export const defaultCogMax = 22;
export const defaultChainMin = 44;
export const defaultChainMax = 52;

export const defaultWheelSize = 622;
export const defaultTireSize = 28;

export const ambidextrous = false;

export function gcd(a: number, b: number) { // Greatest common denominator function
	a = Math.abs(a);
	b = Math.abs(b);
	if (b > a) {const temp = a; a = b; b = temp;}
	while (true) {
		if (b == 0) return a;
		a %= b;
		if (a == 0) return b;
		b %= a;
	}
}

export function make_list(min: number, max: number){
	const list = [""];
	for(let item=min; item<=max; item++){
		list.push(item.toString())
	}
	return list;
}

export function make_table_ratio(cogMin: number, cogMax: number, cRingMin: number, cRingMax: number, firstCol: [string]) {
	const table = [];
	for (let lineIndex = cogMin; lineIndex <= cogMax; lineIndex++) {
		const line = [];
		line.push(firstCol[lineIndex-cogMin+1]);
		for (let column = cRingMin; column <= cRingMax; column++) {
			line.push(Math.round((column / lineIndex) * 100) / 100);
		}
		table.push(line);
	}
	return table;
}

export function make_table_meters(cogMin: number, cogMax: number, cRingMin: number, cRingMax: number, firstCol: [string], selectedWheelSize: number, selectedTireSize: number) {
	const table = [];
	for (let lineIndex = cogMin; lineIndex <= cogMax; lineIndex++) {
		const line = [];
		line.push(firstCol[lineIndex-cogMin+1]);
		for (let column = cRingMin; column <= cRingMax; column++) {
			line.push(Math.round(((selectedWheelSize+selectedTireSize*2)*3.14159*(column / lineIndex))/10)/100);
		}
		table.push(line);
	}
	return table;
}
/*
export function make_table_cadence(cogMin, cogMax, cRing, firstCol, selectedWheelSize, selectedTireSize, cadences) {
	let tableau = [];
	for (let ligne = cogMin; ligne <= cogMax; ligne++) {
		let lign = [];
		lign.push(firstCol[ligne-cogMin+1]);
		for (let colonne = 1 ; colonne < cadences.length; colonne++) {
			lign.push(Math.round(((selectedWheelSize+selectedTireSize*2)*3.14159*(cRing / ligne))*cadences[colonne]*60/100000)/10);
		}
		tableau.push(lign);
	}
	return tableau;
}

export function make_table_skid(cogMin, cogMax, cRingMin, cRingMax, firstCol, ambidextrous) {
	let tableau = [];
	for (let ligne = cogMin; ligne <= cogMax; ligne++) {
		let lign = [];
		lign.push(firstCol[ligne-cogMin+1]);
		for (let colonne = cRingMin; colonne <= cRingMax; colonne++) {
			let gd = gcd(colonne, ligne);
			if ((colonne/gd) %2 != 0 & ambidextrous === true)
			{lign.push(ligne * 2 / gd);}
			else
			{lign.push(ligne / gcd(colonne, ligne));}
		}
		tableau.push(lign);
	}
	return tableau;
}

export function calculate_chain_length(pitch, chainringCount, sprocketCount, distance){
	return (chainringCount/2 + sprocketCount/2) * pitch + distance * 2;
}
*/