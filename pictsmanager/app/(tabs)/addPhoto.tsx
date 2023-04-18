import CameraComponent from '../../components/camera/CameraComponent';
import { useIsFocused } from '@react-navigation/native';

export default function AddPhoto() {
    const isFocused = useIsFocused();
    return isFocused ? <CameraComponent /> : null;
}
