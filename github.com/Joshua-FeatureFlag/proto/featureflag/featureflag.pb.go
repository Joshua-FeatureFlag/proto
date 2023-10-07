// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.24.3
// source: featureflag.proto

package featureflag

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type User struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   int32  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *User) Reset() {
	*x = User{}
	if protoimpl.UnsafeEnabled {
		mi := &file_featureflag_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *User) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*User) ProtoMessage() {}

func (x *User) ProtoReflect() protoreflect.Message {
	mi := &file_featureflag_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use User.ProtoReflect.Descriptor instead.
func (*User) Descriptor() ([]byte, []int) {
	return file_featureflag_proto_rawDescGZIP(), []int{0}
}

func (x *User) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *User) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type Organization struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id    int32   `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name  string  `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Users []*User `protobuf:"bytes,3,rep,name=users,proto3" json:"users,omitempty"`
}

func (x *Organization) Reset() {
	*x = Organization{}
	if protoimpl.UnsafeEnabled {
		mi := &file_featureflag_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Organization) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Organization) ProtoMessage() {}

func (x *Organization) ProtoReflect() protoreflect.Message {
	mi := &file_featureflag_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Organization.ProtoReflect.Descriptor instead.
func (*Organization) Descriptor() ([]byte, []int) {
	return file_featureflag_proto_rawDescGZIP(), []int{1}
}

func (x *Organization) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Organization) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Organization) GetUsers() []*User {
	if x != nil {
		return x.Users
	}
	return nil
}

var File_featureflag_proto protoreflect.FileDescriptor

var file_featureflag_proto_rawDesc = []byte{
	0x0a, 0x11, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x66, 0x6c, 0x61, 0x67, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x66, 0x6c, 0x61, 0x67,
	0x22, 0x2a, 0x0a, 0x04, 0x55, 0x73, 0x65, 0x72, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x5b, 0x0a, 0x0c,
	0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x27, 0x0a, 0x05, 0x75, 0x73, 0x65, 0x72, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x11, 0x2e, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x66, 0x6c, 0x61, 0x67, 0x2e, 0x55, 0x73,
	0x65, 0x72, 0x52, 0x05, 0x75, 0x73, 0x65, 0x72, 0x73, 0x32, 0xda, 0x01, 0x0a, 0x0b, 0x55, 0x73,
	0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x32, 0x0a, 0x0a, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x12, 0x11, 0x2e, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72,
	0x65, 0x66, 0x6c, 0x61, 0x67, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x1a, 0x11, 0x2e, 0x66, 0x65, 0x61,
	0x74, 0x75, 0x72, 0x65, 0x66, 0x6c, 0x61, 0x67, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x12, 0x2f, 0x0a,
	0x07, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x12, 0x11, 0x2e, 0x66, 0x65, 0x61, 0x74, 0x75,
	0x72, 0x65, 0x66, 0x6c, 0x61, 0x67, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x1a, 0x11, 0x2e, 0x66, 0x65,
	0x61, 0x74, 0x75, 0x72, 0x65, 0x66, 0x6c, 0x61, 0x67, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x12, 0x32,
	0x0a, 0x0a, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x12, 0x11, 0x2e, 0x66,
	0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x66, 0x6c, 0x61, 0x67, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x1a,
	0x11, 0x2e, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x66, 0x6c, 0x61, 0x67, 0x2e, 0x55, 0x73,
	0x65, 0x72, 0x12, 0x32, 0x0a, 0x0a, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72,
	0x12, 0x11, 0x2e, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x66, 0x6c, 0x61, 0x67, 0x2e, 0x55,
	0x73, 0x65, 0x72, 0x1a, 0x11, 0x2e, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x66, 0x6c, 0x61,
	0x67, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x32, 0xc2, 0x02, 0x0a, 0x13, 0x4f, 0x72, 0x67, 0x61, 0x6e,
	0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x4a,
	0x0a, 0x12, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x19, 0x2e, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x66, 0x6c,
	0x61, 0x67, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x1a,
	0x19, 0x2e, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x66, 0x6c, 0x61, 0x67, 0x2e, 0x4f, 0x72,
	0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x47, 0x0a, 0x0f, 0x47, 0x65,
	0x74, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x19, 0x2e,
	0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x66, 0x6c, 0x61, 0x67, 0x2e, 0x4f, 0x72, 0x67, 0x61,
	0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x1a, 0x19, 0x2e, 0x66, 0x65, 0x61, 0x74, 0x75,
	0x72, 0x65, 0x66, 0x6c, 0x61, 0x67, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x4a, 0x0a, 0x12, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x4f, 0x72, 0x67,
	0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x19, 0x2e, 0x66, 0x65, 0x61, 0x74,
	0x75, 0x72, 0x65, 0x66, 0x6c, 0x61, 0x67, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x1a, 0x19, 0x2e, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x66, 0x6c,
	0x61, 0x67, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12,
	0x4a, 0x0a, 0x12, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x19, 0x2e, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x66,
	0x6c, 0x61, 0x67, 0x2e, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x1a, 0x19, 0x2e, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x66, 0x6c, 0x61, 0x67, 0x2e, 0x4f,
	0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x42, 0x3d, 0x5a, 0x3b, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x4a, 0x6f, 0x73, 0x68, 0x75, 0x61,
	0x2d, 0x46, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x46, 0x6c, 0x61, 0x67, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2f, 0x66, 0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x66, 0x6c, 0x61, 0x67, 0x3b, 0x66,
	0x65, 0x61, 0x74, 0x75, 0x72, 0x65, 0x66, 0x6c, 0x61, 0x67, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_featureflag_proto_rawDescOnce sync.Once
	file_featureflag_proto_rawDescData = file_featureflag_proto_rawDesc
)

func file_featureflag_proto_rawDescGZIP() []byte {
	file_featureflag_proto_rawDescOnce.Do(func() {
		file_featureflag_proto_rawDescData = protoimpl.X.CompressGZIP(file_featureflag_proto_rawDescData)
	})
	return file_featureflag_proto_rawDescData
}

var file_featureflag_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_featureflag_proto_goTypes = []interface{}{
	(*User)(nil),         // 0: featureflag.User
	(*Organization)(nil), // 1: featureflag.Organization
}
var file_featureflag_proto_depIdxs = []int32{
	0, // 0: featureflag.Organization.users:type_name -> featureflag.User
	0, // 1: featureflag.UserService.CreateUser:input_type -> featureflag.User
	0, // 2: featureflag.UserService.GetUser:input_type -> featureflag.User
	0, // 3: featureflag.UserService.UpdateUser:input_type -> featureflag.User
	0, // 4: featureflag.UserService.DeleteUser:input_type -> featureflag.User
	1, // 5: featureflag.OrganizationService.CreateOrganization:input_type -> featureflag.Organization
	1, // 6: featureflag.OrganizationService.GetOrganization:input_type -> featureflag.Organization
	1, // 7: featureflag.OrganizationService.UpdateOrganization:input_type -> featureflag.Organization
	1, // 8: featureflag.OrganizationService.DeleteOrganization:input_type -> featureflag.Organization
	0, // 9: featureflag.UserService.CreateUser:output_type -> featureflag.User
	0, // 10: featureflag.UserService.GetUser:output_type -> featureflag.User
	0, // 11: featureflag.UserService.UpdateUser:output_type -> featureflag.User
	0, // 12: featureflag.UserService.DeleteUser:output_type -> featureflag.User
	1, // 13: featureflag.OrganizationService.CreateOrganization:output_type -> featureflag.Organization
	1, // 14: featureflag.OrganizationService.GetOrganization:output_type -> featureflag.Organization
	1, // 15: featureflag.OrganizationService.UpdateOrganization:output_type -> featureflag.Organization
	1, // 16: featureflag.OrganizationService.DeleteOrganization:output_type -> featureflag.Organization
	9, // [9:17] is the sub-list for method output_type
	1, // [1:9] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_featureflag_proto_init() }
func file_featureflag_proto_init() {
	if File_featureflag_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_featureflag_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*User); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_featureflag_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Organization); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_featureflag_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   2,
		},
		GoTypes:           file_featureflag_proto_goTypes,
		DependencyIndexes: file_featureflag_proto_depIdxs,
		MessageInfos:      file_featureflag_proto_msgTypes,
	}.Build()
	File_featureflag_proto = out.File
	file_featureflag_proto_rawDesc = nil
	file_featureflag_proto_goTypes = nil
	file_featureflag_proto_depIdxs = nil
}
