import { useState, useEffect } from 'react';

const useDeviceSize = () => {
	const [deviceSizePx, setDeviceSizePx] = useState();
	const [deviceSize, setDeviceSize] = useState();

	const handleResize = () => setDeviceSizePx(window.innerWidth);

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		if (deviceSizePx <= 576) {
			setDeviceSize('xs');
		} else if (deviceSizePx <= 768) {
			setDeviceSize('sm');
		} else if (deviceSizePx <= 992) {
			setDeviceSize('md');
		} else if (deviceSizePx <= 1200) {
			setDeviceSize('lg');
		} else {
			setDeviceSize('xl');
		}
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [deviceSizePx]);

	return deviceSize;
};

export default useDeviceSize;
