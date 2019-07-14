import React, { Component } from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import appIconsConfig from '../../appIconsConfig.json';
import avatarIconsConfig from '../../avatarIconsConfig.json';
import {
	colorPicker
} from '../helper';

const AppIcons = createIconSetFromIcoMoon(appIconsConfig, 'appIcons', 'appIcons.ttf');
const AvatarIcons = createIconSetFromIcoMoon(avatarIconsConfig, 'avatarIcons', 'avatarIcons.ttf');

class AwsmIcon extends Component {
	componentDidUpdate(nextProps) {
		if (nextProps.type && this.props.type !== nextProps.type) {
			this.setIcon(nextProps.type);
		}
	}

	setIcon(iconType) {
		switch (iconType) {
			case 'AntDesign':
				this.Icon = AntDesign;
				break;
			case 'Entypo':
				this.Icon = Entypo;
				break;
			case 'EvilIcons':
				this.Icon = EvilIcons;
				break;
			case 'Feather':
				this.Icon = Feather;
				break;
			case 'FontAwesome':
				this.Icon = FontAwesome;
				break;
			case 'FontAwesome5':
				this.Icon = FontAwesome5;
				break;
			case 'Foundation':
				this.Icon = Foundation;
				break;
			case 'Ionicons':
				this.Icon = Ionicons;
				break;
			case 'MaterialCommunityIcons':
				this.Icon = MaterialCommunityIcons;
				break;
			case 'MaterialIcons':
				this.Icon = MaterialIcons;
				break;
			case 'Octicons':
				this.Icon = Octicons;
				break;
			case 'SimpleLineIcons':
				this.Icon = SimpleLineIcons;
				break;
			case 'Zocial':
				this.Icon = Zocial;
				break;
			case 'AppIcons':
				this.Icon = AppIcons;
				break;
			case 'AvatarIcons':
				this.Icon = AvatarIcons;
				break;
			default:
				this.Icon = Ionicons;
		}
	}

	render() {
		const { name, color, fontSize } = this.props;
		this.setIcon(this.props.type);
		return (
			<this.Icon 
				name={name}
				color={color || colorPicker().fgColor}
				size={fontSize}
				{...this.props}
			/>
		);
	}
}

export default AwsmIcon;
