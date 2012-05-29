function initsvgrotation(target_obj, target_id) {
	addRotateTransform(target_obj, target_id, 3, 1);
}

function addRotateTransform(target_obj, target_id, speed, direction) {
	var element_to_rotate = target_obj.getElementById(target_id);
	var my_transform = target_obj.createElementNS("http://www.w3.org/2000/svg", "animateTransform");

	var bb = element_to_rotate.getBBox();
	var cx = -10;
	var cy = -12
	
	my_transform.setAttributeNS(null, "attributeName", "transform");
	my_transform.setAttributeNS(null, "attributeType", "XML");
	my_transform.setAttributeNS(null, "type", "rotate");
	my_transform.setAttributeNS(null, "dur", speed + "s");
	my_transform.setAttributeNS(null, "repeatCount", "indefinite");
	my_transform.setAttributeNS(null, "from", "0 " + cx + " " + cy);
	my_transform.setAttributeNS(null, "to", 360 * direction + " " + cx + " " + cy);
	element_to_rotate.appendChild(my_transform);
	my_transform.beginElement();
}