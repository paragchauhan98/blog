import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../model/posts';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url:string="http://localhost:3000/post"
  constructor(private http:HttpClient) { }


  //get all posts
 getAllPosts():Observable<Posts[]>{
return this.http.get<Posts[]>(this.url)
 }
 //get single post
//  getFirstPost():Observable<Posts[]>{
//   return this.http.get<Posts[]>(this.url)
//    } 

 //get post by id
 getPostById(id:string):Observable<Posts>{
  return this.http.get<Posts>(this.url+'/'+id)
 }

 //delete post 
 deletePost(id:string):Observable<Posts>{
  return this.http.delete<Posts>(this.url+'/'+id)
 }

 //update post
 updatePost(post:Posts):Observable<Posts>{
  return this.http.put<Posts>(this.url+'/'+post._id,post)
 }

 //create new posts

 createPost(post:Posts):Observable<Posts>{
  return this.http.post<Posts>(this.url,post)
 }

 //create new message
 postMessage(contacts:Contact):Observable<Contact>{
  return this.http.post<Contact>(this.url,contacts)
 }
}
