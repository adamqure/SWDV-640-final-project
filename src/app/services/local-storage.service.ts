import { Injectable } from '@angular/core';
import { Campaign } from '../data-models/campaign';
import { collection, addDoc, Firestore, deleteDoc, doc, setDoc, getDocs, getDoc } from '@angular/fire/firestore';
import { BlogPost } from '../data-models/blog-post';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private static campaignCollection = "campaigns"
  private static blogPostCollection = "blog-posts"

  constructor(private readonly firestore: Firestore) { }

  async getCampaignList(): Promise<Campaign[]> {
    const campaignCollectionRef = collection(this.firestore, LocalStorageService.campaignCollection)
    return getDocs(campaignCollectionRef).then((collections) => {
      var result: Campaign[] = []
      collections.forEach((document) => {
        let json = document.data()
        let campaign = JSON.parse(json['object'])
        result.push(campaign as Campaign)
      })
      return result
    })
  }

  async getCampaign(forID: any): Promise<Campaign> {
    const campaignRef = doc(this.firestore, LocalStorageService.campaignCollection + "/" + forID)
    return getDoc(campaignRef).then((document) => {
      let json = document.data()
      if (json) {
        let campaign = JSON.parse(json["object"])
        return campaign as Campaign
      }
      
      throw Error("No campaign available for ID: " + forID)
    })
  }

  deleteCampaign(campaign: Campaign) {
    const campaignRef = doc(this.firestore, LocalStorageService.campaignCollection + "/" + campaign._id)
    deleteDoc(campaignRef)
  }

  createCampaign(campaign: Campaign, callback: () => void) {
    addDoc(collection(this.firestore, LocalStorageService.campaignCollection), {
      object: JSON.stringify(campaign)
    })
    .then((documentRef) => {
      campaign._id = documentRef.id
      setDoc(documentRef, {
        object: JSON.stringify(campaign)
      }).then((response) => {
        callback()
      })
    })
  }

  async getBlogPostList(): Promise<BlogPost[]> {
    const blogPostCollectionRef = collection(this.firestore, LocalStorageService.blogPostCollection)
    return getDocs(blogPostCollectionRef).then((collections) => {
      var result: BlogPost[] = []
      collections.forEach((document) => {
        let json = document.data()
        let blogPost = new BlogPost(
          document.id,
          json["title"],
          json["html"]
        )
        result.push(blogPost)
      })
      return result
    })
  }

  async getBlogPost(forID: any): Promise<BlogPost> {
    const blogPostRef = doc(this.firestore, LocalStorageService.blogPostCollection + "/" + forID)
    return getDoc(blogPostRef).then((document) => {
      let json = document.data()
      if (json) {
        let blogPost = new BlogPost(
          document.id,
          json["title"],
          json["html"]
        )
        return blogPost
      }
      
      throw Error("No blog post available for ID: " + forID)
    })
  }
}
